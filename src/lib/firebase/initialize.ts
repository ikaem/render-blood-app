import admin from 'firebase-admin';
import serviceAccount from './service-account-key.json';

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

const initializeFirebaseApp = () => {
  // TODO not sure if this is needed
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(params),
      });
    } catch (error) {
      // TODO log better here
      console.log('Firebase admin initialization error', error.stack);
    }
  }

  return {
    db: admin.firestore(),
  };
};

export const firebaseAdmin = initializeFirebaseApp();
