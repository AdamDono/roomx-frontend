import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyCucVXZ8fPjy2wRqXQUySd5tb1bNfWaDFo',
  authDomain: 'roomx-c2474.firebaseapp.com',
  projectId: 'roomx-c2474',
  storageBucket: 'roomx-c2474.appspot.com',
  messagingSenderId: '325472960298',
  appId: 'YOUR_APP_ID', // Replace with your Firebase App ID (if available)
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};