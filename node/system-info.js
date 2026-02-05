import os from 'node:os'

console.log('Información del sistema:');
console.log('Sistema Operativo:', os.type());
console.log('Versión del SO:', os.release());
console.log('Arquitectura:', os.arch());
console.log('Número de CPUs:', os.cpus().length);
console.log('Memoria Total (MB):', Math.round(os.totalmem() / 1024 / 1024));
console.log('Memoria Libre (MB):', Math.round(os.freemem() / 1024 / 1024));