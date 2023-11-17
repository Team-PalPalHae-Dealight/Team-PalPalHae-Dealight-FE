import type { Preview } from '@storybook/react';
import '../app/globals.css';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthProvider } from '../app/_providers/AuthProvider';
import { UserInfoProvider } from '../app/_providers/UserInfoProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobile: {
          name: 'iPhone 12 Pro',
          styles: {
            width: '390px',
            height: '844px',
          },
          type: 'mobile',
        },
      },
    },
  },
  decorators: [
    Story => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <UserInfoProvider>
              <Story />
            </UserInfoProvider>
          </AuthProvider>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
