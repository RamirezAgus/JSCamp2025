import express from "express";
import cors from "cors";
import jobs from "./jobs.json" with { type: "json" };
import { DEFAULTS } from "./config.js";

const PORT = process.env.PORT ?? DEFAULTS.PORT;
const app = express();

const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:5173',
]

app.use(cors({
    origin: (origin, callback) => {
        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }
        return callback(new Error('Origin not allowed by CORS'))
    }
}))

app.use(express.json());


app.use((request, response, next) => {
  const timeString = new Date().toLocaleTimeString();
  console.log(`[${timeString}] ${request.method} ${request.url}`);
  next();
});

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/health", (request, response) => {
  response.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

// CRUD: Create, Read, Update, Delete

app.get("/jobs", (req, res) => {
  const {
    text,
    title,
    level,
    limit = DEFAULTS.LIMIT_PAGINATION,
    technology,
    offset = DEFAULTS.LIMIT_OFFSET,
  } = req.query;

  let filteredJobs = jobs;

  if (text) {
    const searchTerm = text.toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.titulo.toLowerCase().includes(searchTerm) ||
        job.descripcion.toLowerCase().includes(searchTerm),
    );
  }

  if (technology) {
    filteredJobs = filteredJobs.filter((job) =>
      job.tecnologias.includes(technology),
    );
  }

  const limitNumber = Number(limit);
  const offsetNumber = Number(offset);

  const paginatedJobs = filteredJobs.slice(
    offsetNumber,
    offsetNumber + limitNumber,
  );

  return res.json({ data: paginatedJobs, total: filteredJobs.length, limit: limitNumber, offset: offsetNumber});
});

app.get("/jobs/:id", (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  return res.json(job);
});

app.post('/jobs', (req, res) => {
const { titulo, empresa, ubicacion, data } = req.body;

    const newJob = {
        id: crypto.randomUUID(),
        titulo,
        empresa,
        ubicacion,
        data    
    }

    jobs.push(newJob);

    return res.status(201).json(newJob);
})

// Reemplazar un recurso completo
app.put('/jobs/:id', (req, res) => {

})

// Actualizar un recurso parcialmente
app.patch('/jobs/:id', (req, res) => {

})

app.delete("/jobs/:id", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
