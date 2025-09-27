import React from 'react';
import { Check, Clock, Calendar, Users, Trophy } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  icon?: React.ReactNode;
}

interface StepperTimelineProps {
  steps?: Step[];
  className?: string;
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: 'Registration Opens',
    description: 'Early bird registration with 30% discount starts now',
    date: 'Jan 15, 2025',
    status: 'completed',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'Speaker Lineup Announced',
    description: 'Meet our world-class speakers and industry leaders',
    date: 'Feb 10, 2025',
    status: 'completed',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'Workshop Details Released',
    description: 'Hands-on workshops and interactive sessions revealed',
    date: 'Feb 25, 2025',
    status: 'current',
    icon: <Calendar className="w-5 h-5" />
  },
  {
    id: 4,
    title: 'TechEdu Summit 2025',
    description: 'Three days of innovation, learning, and networking',
    date: 'Mar 15-17, 2025',
    status: 'upcoming',
    icon: <Trophy className="w-5 h-5" />
  }
];

const StepperTimeline: React.FC<StepperTimelineProps> = ({
  steps = defaultSteps,
  className = ''
}) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>

        {/* Timeline steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start group">
              {/* Step circle and icon */}
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 group-hover:scale-110
                    ${step.status === 'completed'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400 shadow-lg shadow-green-500/30'
                      : step.status === 'current'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-400 shadow-lg shadow-blue-500/30 animate-pulse'
                        : 'bg-gray-700 border-gray-600 shadow-lg shadow-gray-500/20'
                    }
                  `}
                >
                  {step.status === 'completed' ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : step.status === 'current' ? (
                    <Clock className="w-6 h-6 text-white animate-spin-slow" />
                  ) : (
                    step.icon || <Calendar className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Step content */}
              <div className="ml-8 pb-8 flex-1">
                <div
                  className={`
                    p-6 rounded-xl border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1
                    ${step.status === 'completed'
                      ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10'
                      : step.status === 'current'
                        ? 'bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/10'
                        : 'bg-gray-800/50 border-gray-700/50 shadow-lg shadow-gray-500/10'
                    }
                  `}
                >
                  {/* Date badge */}
                  <div className="mb-3">
                    <span
                      className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${step.status === 'completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : step.status === 'current'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/50'
                        }
                      `}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {step.date}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3
                    className={`
                      text-xl font-bold mb-2 transition-colors duration-300
                      ${step.status === 'completed'
                        ? 'text-green-400'
                        : step.status === 'current'
                          ? 'text-blue-400'
                          : 'text-gray-300'
                      }
                    `}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Status indicator */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div
                      className={`
                        w-2 h-2 rounded-full
                        ${step.status === 'completed'
                          ? 'bg-green-500 animate-pulse'
                          : step.status === 'current'
                            ? 'bg-blue-500 animate-pulse'
                            : 'bg-gray-600'
                        }
                      `}
                    ></div>
                    <span
                      className={`
                        text-sm font-medium capitalize
                        ${step.status === 'completed'
                          ? 'text-green-400'
                          : step.status === 'current'
                            ? 'text-blue-400'
                            : 'text-gray-500'
                        }
                      `}
                    >
                      {step.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connecting line to next step */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-400">Progress</span>
          <span className="text-sm font-medium text-gray-400">
            {steps.filter(s => s.status === 'completed').length} of {steps.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${(steps.filter(s => s.status === 'completed').length / steps.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StepperTimeline;