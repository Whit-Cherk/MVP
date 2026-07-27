import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Revisa si ya hay una sesión guardada (al recargar la página)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Se suscribe a cambios de sesión: login, logout, token refresh, etc.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // 3. Limpieza: cancela la suscripción cuando el provider se destruye
    return () => subscription.unsubscribe();
  }, []);

  // Registro de un nuevo seller.
  // "nombre" se envía como metadata y el trigger de Supabase
  // (create_seller_profile) lo usa para crear la fila en "seller".
  const signUp = ({ email, password, nombre }) => {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre },
      },
    });
  };

  const signIn = ({ email, password }) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = () => {
    return supabase.auth.signOut();
  };

  const value = {
    session,
    user: session?.user ?? null,
    loading,
    signUp,
    signIn,
    signOut,
  };

  // No renderiza los hijos hasta saber si hay sesión o no,
  // para evitar que ProtectedRoute redirija a /login por error
  // mientras Supabase todavía está revisando el localStorage.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un <AuthProvider>');
  }
  return context;
};
