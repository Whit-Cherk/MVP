# Autenticación con Supabase — archivos a copiar

Copia cada archivo de este zip a la misma ruta relativa dentro de tu proyecto
`mvp/`, sobrescribiendo los que ya existan.

## Archivos nuevos
- `src/supabaseClient.js`
- `src/context/AuthContext.jsx`
- `src/components/ProtectedRoute.jsx`
- `src/main.jsx` — no venía en tu zip original, lo recreé estándar.
  Si ya tienes uno en tu repo real, compáralo antes de sobrescribir.
- `.env.example`

## Archivos modificados
- `package.json` — se agregó `@supabase/supabase-js` a las dependencias.
- `src/App.jsx` — envuelto en `<AuthProvider>`, rutas de vendedor
  protegidas con `<ProtectedRoute>`. Las rutas de storefront/producto/
  carrito/order-success se dejaron públicas (guest checkout).
- `src/links/Login.jsx` — conectado a `signInWithPassword`, con estado
  de error y botón deshabilitado mientras procesa.
- `src/links/CreateSeller.jsx` — conectado a `signUp`. También corregí
  un bug que ya existía: el input de email leía `formData.email`
  (que no existía) en vez de `formData.createEmail`.
- `src/links/AccountSettings.jsx` — se agregó el botón "Cerrar sesión".
- `src/components/ActionButton.jsx` — se agregó soporte para la prop
  `disabled` (no existía, y los botones de submit la necesitan).

## Pasos después de copiar los archivos

1. `cd mvp`
2. `npm install` (para traer `@supabase/supabase-js`)
3. Crea tu `.env` real en la raíz de `mvp/` (mismo nivel que `package.json`)
   con `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` — tú te encargas
   de los valores.
4. Confirma que `.env` esté en tu `.gitignore` (revisa el que ya tienes
   en la raíz del repo) para no subir las llaves a GitHub.
5. `npm run dev` y prueba el flujo: `/create-seller` → debería crear
   el usuario en Supabase Auth + la fila en `seller` automáticamente
   (vía el trigger `create_seller_profile`) → `/create-store` →
   `/login` con esas credenciales → `/home` → botón "Cerrar sesión"
   en `/profile` te regresa a `/login`.

## Una cosa importante a decidir de tu lado

Si tu proyecto de Supabase tiene la confirmación de email **activada**
(Authentication → Providers → Email → "Confirm email"), un usuario
recién registrado **no tendrá sesión activa** hasta que confirme su
correo. Eso significa:

- El `update` del teléfono en `CreateSeller.jsx` va a fallar
  silenciosamente (RLS lo bloquea sin sesión) — el teléfono quedará
  vacío hasta que el usuario inicie sesión por primera vez.
- Vas a necesitar una pantalla de "revisa tu correo" después del
  registro, en vez de navegar directo a `/create-store`.

Si prefieres que el registro sea inmediato (sin confirmación de
correo, más simple para un MVP), desactiva esa opción en el dashboard
de Supabase. Avísame cuál prefieres y ajustamos el flujo de
`CreateSeller.jsx` en consecuencia.
