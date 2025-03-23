import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const firebaseConfig = {
  apiKey: "AIzaSyCucVXZ8fPjy2wRqXQUySd5tb1bNfWaDFo",
  authDomain: "roomx-c2474.firebaseapp.com",
  projectId: "roomx-c2474",
  storageBucket: "roomx-c2474.appspot.com",
  messagingSenderId: "325472960298",
  appId: "1:325472960298:web:edeed17e2ad7d8d5576853",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Initialize Firebase App
    provideAuth(() => getAuth()), // Initialize Firebase Auth
    AuthService,
    AuthGuard,
  ],
};
console.log('Firebase initialized:', initializeApp(firebaseConfig));

console.log('Initializing Firebase...');
provideFirebaseApp(() => {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized:', app);
  return app;
})