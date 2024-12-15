export interface Media {
    id: string;
    name: string;
    location: string;
    type: string;
}

export interface Proposal {
    proposalId: string;
    fixerId: string;
    serviceCost: number;
    apparatusCost: number;
    estimatedDuration: string;
    totalBudget: number;
    proposalDate: string;
    proposalStatus: string;
}

export interface Task {
    task_id: string;
    fixer_id: string;
    client_id: string;
    title: string;
    description: string;
    location: string;
    categoryId: string;
    status: string;
    city: string;
    created_at: string;
    serviceCost: number;
    apparatusCost: number;
    estimatedDuration: string;
    date: string;
    time: string;
    finishedDate: string;
    media: Media[];
    proposals: Proposal[];
    activeProposal: Proposal;
}

export interface TaskResponse {
    data: Task[];
    message: string;
    role: string;
    status: number;
}