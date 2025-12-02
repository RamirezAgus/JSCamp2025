import { useAuthStore } from "../store/authStore";
import { useFavoritesStore } from "../store/favoritesStore";

export function HeaderUserButton() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const { clearFavorites } = useFavoritesStore();

  const handleLogout = () => {
    logout();
    clearFavorites();
  };

  return isLoggedIn ? (
    <button onClick={handleLogout}>Cerrar sesión</button>
  ) : (
    <button onClick={login}>Iniciar sesión</button>
  );
}
