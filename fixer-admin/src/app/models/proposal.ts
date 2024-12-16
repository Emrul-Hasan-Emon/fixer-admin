export interface Proposal {
    proposalId: string;
    taskId: string;
    service_cost: number;
    apparatus_cost: number;
    estimated_duration: number;
    date: string;
    time: string;
    status: string;
}

export interface ProposalResponse {
    data: Proposal[];
    message: string;
    fixerId: string;
    role: string;
    status: number;
}