export default {
    // Indique à Jest d'utiliser TypeScript pour transpiler les fichiers .ts
    preset: 'ts-jest',

    // Chemin d'accès aux fichiers de test
    testMatch: ['**/__tests__/**/*.ts'],

    // Ignorer les fichiers de test sous le dossier node_modules
    testPathIgnorePatterns: ['/node_modules/'],

    // Les fichiers que Jest utilisera pour les tests (ici, les fichiers .ts)
    moduleFileExtensions: ['ts', 'js'],

    // Ignorer les fichiers de construction générés (par exemple, le dossier dist)
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};