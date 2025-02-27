import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("policy", "routes/policy.tsx"),
    route("delete", "routes/delete.tsx"),
] satisfies RouteConfig;