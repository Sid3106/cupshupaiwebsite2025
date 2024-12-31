import { RouteObject } from 'react-router-dom';
import { WorkflowAutomation } from '../pages/services/WorkflowAutomation';
import { AIToolsAndAgents } from '../pages/services/AIToolsAndAgents';
import { ChatbotsAndGPTs } from '../pages/services/ChatbotsAndGPTs';
import { ProcessOptimization } from '../pages/services/ProcessOptimization';
import { IntegrationServices } from '../pages/services/IntegrationServices';

export const serviceRoutes: RouteObject[] = [
  {
    path: '/services/workflow-automation',
    element: <WorkflowAutomation />
  },
  {
    path: '/services/ai-tools-and-agents',
    element: <AIToolsAndAgents />
  },
  {
    path: '/services/chatbots-and-gpts',
    element: <ChatbotsAndGPTs />
  },
  {
    path: '/services/process-optimization',
    element: <ProcessOptimization />
  },
  {
    path: '/services/integration-services',
    element: <IntegrationServices />
  }
];