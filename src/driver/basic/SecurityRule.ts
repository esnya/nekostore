import { FilterQuery } from 'mongodb';

export interface User {
  uid: string;
}

export interface Request {
  auth: User | null;
}

export interface SecurityRuleMatcher {
  path: string;
  read?: boolean | FilterQuery<Request>;
  write?: boolean | FilterQuery<Request>;
}

/**
 * Security rule format.
 */
export default interface SecurityRule {
  rules: SecurityRuleMatcher[];
}
