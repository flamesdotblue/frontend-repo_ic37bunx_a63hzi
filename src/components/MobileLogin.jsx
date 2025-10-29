import { useEffect, useRef } from "react";

export default function MobileLogin({ onSuccess }) {
  const buttonRef = useRef(null);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!clientId) return; // Render fallback button when missing client id

    // Load Google script
    const scriptId = "google-identity-services";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.defer = true;
      s.id = scriptId;
      s.onload = () => init();
      document.body.appendChild(s);
    } else {
      init();
    }

    function init() {
      if (!window.google || !window.google.accounts || !buttonRef.current) return;
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: async (response) => {
          try {
            const res = await fetch(`${backend}/auth/google`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id_token: response.credential }),
            });
            if (!res.ok) throw new Error("Sign-in failed");
            const data = await res.json();
            localStorage.setItem("auth_token", data.token);
            localStorage.setItem("auth_user", JSON.stringify(data.user));
            onSuccess?.(data);
          } catch (e) {
            alert("Google sign-in failed. Please try again.");
          }
        },
      });
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "filled",
        size: "large",
        shape: "pill",
        width: 280,
      });
    }
  }, [clientId, backend, onSuccess]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-sky-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-indigo-600 text-white grid place-items-center text-xl font-bold">G</div>
            <h1 className="mt-3 text-xl font-semibold text-slate-900">Welcome to Guardian Hub</h1>
            <p className="mt-1 text-sm text-slate-600">Sign in to manage your family's devices</p>
          </div>

          <div className="mt-6">
            {clientId ? (
              <div className="flex flex-col items-center">
                <div ref={buttonRef} />
                <p className="mt-3 text-xs text-slate-500">Use your Google account to continue</p>
              </div>
            ) : (
              <button
                onClick={() => alert("Missing VITE_GOOGLE_CLIENT_ID env. Add it and reload.")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Continue
              </button>
            )}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600">
              This flow is optimized for mobile. After signing in, your session is stored securely and synced with your rules and devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
