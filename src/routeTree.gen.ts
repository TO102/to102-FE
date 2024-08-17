/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as ReviewsImport } from './routes/reviews'
import { Route as NewsImport } from './routes/news'
import { Route as LoginImport } from './routes/login'
import { Route as ChatImport } from './routes/chat'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileUserIdImport } from './routes/profile/$userId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const ReviewsRoute = ReviewsImport.update({
  path: '/reviews',
  getParentRoute: () => rootRoute,
} as any)

const NewsRoute = NewsImport.update({
  path: '/news',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ChatRoute = ChatImport.update({
  path: '/chat',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileUserIdRoute = ProfileUserIdImport.update({
  path: '/profile/$userId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/chat': {
      id: '/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/news': {
      id: '/news'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsImport
      parentRoute: typeof rootRoute
    }
    '/reviews': {
      id: '/reviews'
      path: '/reviews'
      fullPath: '/reviews'
      preLoaderRoute: typeof ReviewsImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/profile/$userId': {
      id: '/profile/$userId'
      path: '/profile/$userId'
      fullPath: '/profile/$userId'
      preLoaderRoute: typeof ProfileUserIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ChatRoute,
  LoginRoute,
  NewsRoute,
  ReviewsRoute,
  SignupRoute,
  ProfileUserIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/chat",
        "/login",
        "/news",
        "/reviews",
        "/signup",
        "/profile/$userId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/chat": {
      "filePath": "chat.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/news": {
      "filePath": "news.tsx"
    },
    "/reviews": {
      "filePath": "reviews.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/profile/$userId": {
      "filePath": "profile/$userId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
