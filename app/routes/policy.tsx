import type { Route } from '../+types/root';
import { PolicyScreen } from '../policy/policy'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Khati Web Page | Polcies" },
        { name: "description", content: "Privacy Policy of Khati!" },
    ];
}

export default function Policy() {
    return <PolicyScreen />;
}