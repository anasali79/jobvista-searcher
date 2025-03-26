// A simple store to keep track of job applications
// In a real app, this would connect to a backend

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Job } from '../data/jobs';

interface ApplicationState {
  appliedJobs: Job[];
  applyForJob: (job: Job) => void;
  hasAppliedForJob: (jobId: string) => boolean;
}

export const useApplicationStore = create<ApplicationState>()(
  persist(
    (set, get) => ({
      appliedJobs: [],
      applyForJob: (job) => {
        if (!get().hasAppliedForJob(job.id)) {
          set((state) => ({
            appliedJobs: [...state.appliedJobs, job]
          }));
        }
      },
      hasAppliedForJob: (jobId) => {
        return get().appliedJobs.some(job => job.id === jobId);
      }
    }),
    {
      name: 'job-applications-storage'
    }
  )
);
