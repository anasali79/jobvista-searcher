// A simple store to keep track of job applications
// In a real app, this would connect to a backend

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Job } from '../data/jobs';

// Define possible application statuses
export type ApplicationStatus = 'applied' | 'screening' | 'interview' | 'assessment' | 'offer' | 'rejected';

export interface JobApplication {
  job: Job;
  appliedAt: string;
  status: ApplicationStatus;
  lastUpdated: string;
}

interface ApplicationState {
  applications: JobApplication[];
  applyForJob: (job: Job) => void;
  hasAppliedForJob: (jobId: string) => boolean;
  updateApplicationStatus: (jobId: string, status: ApplicationStatus) => void;
  getApplication: (jobId: string) => JobApplication | undefined;
}

export const useApplicationStore = create<ApplicationState>()(
  persist(
    (set, get) => ({
      applications: [],
      applyForJob: (job) => {
        if (!get().hasAppliedForJob(job.id)) {
          const now = new Date().toISOString();
          set((state) => ({
            applications: [
              ...state.applications, 
              {
                job,
                appliedAt: now,
                status: 'applied',
                lastUpdated: now
              }
            ]
          }));
        }
      },
      hasAppliedForJob: (jobId) => {
        return get().applications.some(application => application.job.id === jobId);
      },
      updateApplicationStatus: (jobId, status) => {
        set((state) => ({
          applications: state.applications.map(application => 
            application.job.id === jobId 
              ? {
                  ...application,
                  status,
                  lastUpdated: new Date().toISOString()
                }
              : application
          )
        }));
      },
      getApplication: (jobId) => {
        return get().applications.find(application => application.job.id === jobId);
      }
    }),
    {
      name: 'job-applications-storage'
    }
  )
);
