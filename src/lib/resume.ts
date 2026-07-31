import type { LogoKey } from './logos';

export interface TimelineEntry {
    role: string;
    org: string;
    orgUrl?: string;
    category?: string;
    dates: string;
    type?: string;
    description: string[];
    tech: LogoKey[];
}

export const experiences: TimelineEntry[] = [
    {
        role: 'Site Reliability Engineer',
        org: 'Theodo Cloud',
        orgUrl: 'https://www.theodo.com/en-fr/expertise/cloud',
        dates: 'Feb 2026 - Aug 2026',
        type: 'End-of-studies internship',
        description: [
            'First 2 months: operating and maintaining cloud infrastructures for 20 clients on AWS and GCP, with new deployments depending on business needs, restoring downed environments, and FinOps optimisations.',
            'Following 4 months: build and run of a cloud platform for the ANS (French Government) on OVH. Automating access control, deploying resources depending on business needs, security hardening of Kubernetes clusters, and migrating apps from one platform to another.',
        ],
        tech: [
            'Terraform',
            'Terragrunt',
            'AWS',
            'GCP',
            'OVH',
            'Kubernetes',
            'ArgoCD',
            'Vault',
            'Keycloak',
            'NeuVector',
        ],
    },
    {
        role: 'Software Developer',
        org: 'Inpart SAS',
        dates: 'Sept 2024 - Feb 2025',
        type: 'Mid-studies internship',
        description: [
            'Rewrite of a webapp module handling meeting planning for bioconferences around the world. Maintained backward compatibility while bringing in new technologies for better long-term maintainability.',
        ],
        tech: ['Java', 'SpringBoot', 'MySQL', 'Redis', 'Docker'],
    },
];

export const projects: TimelineEntry[] = [
    {
        role: 'Lead DevSecOps',
        org: 'ASCloud',
        category: 'Personal',
        dates: 'June 2026 - Today',
        description: [
            'Creation of a Kubernetes platform for Antonin and his friends, with shared services to facilitate deployment and maintainability. Hardened security of the platform and tools, as users can deploy arbitrary containers.',
            'Responsibilities included onboarding, change management, and developer support.',
        ],
        tech: [
            'OVH',
            'Cloudflare',
            'Kubernetes',
            'ArgoCD',
            'Vault',
            'Keycloak',
            'Kyverno',
            'Prometheus',
            'Grafana',
            'Loki',
            'Tempo',
            'Pyroscope',
        ],
    },
    {
        role: 'Lead DevOps',
        org: 'UBSI',
        category: 'Academic',
        dates: 'June 2025 - Feb 2026',
        description: [
            'Setting up and running a software development and CI/CD factory for development teams, handling everything from ticket creation to production deployment.',
            'Coordination, developer support, and technology improvement across 10 development teams, totaling 58 people, working on interconnected web applications.',
        ],
        tech: [
            'GitLab',
            'Kubernetes',
            'Docker',
            'PostgreSQL',
            'RabbitMQ',
            'ArgoCD',
            'NestJS',
            'Drizzle',
            'React',
            'Tailwind',
        ],
    },
];

export const education: TimelineEntry[] = [
    {
        role: 'CS Engineer',
        org: 'EPITA',
        dates: 'Sept 2021 - Aug 2026',
        type: 'Lyon and Paris Campus',
        description: ['SIGL specialty, IT Systems and Software Engineering.'],
        tech: [],
    },
    {
        role: 'TOEIC — 990/990',
        org: 'ETS',
        dates: 'Jan 2024',
        description: ['Perfect score on the TOEIC English proficiency test.'],
        tech: [],
    },
];
