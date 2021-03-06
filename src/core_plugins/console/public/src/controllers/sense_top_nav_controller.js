import KbnTopNavControllerProvider from 'ui/kbn_top_nav/kbn_top_nav_controller';
import storage from '../storage';

export function SenseTopNavController(Private) {
  const KbnTopNavController = Private(KbnTopNavControllerProvider);

  const controller = new KbnTopNavController([
    {
      key: 'welcome',
      label:'欢迎',
      hideButton: true,
      template: `<sense-welcome></sense-welcome>`,
      testId: 'consoleWelcomeButton',
    },
    {
      key: 'history',
      label:'历史',
      description: 'History',
      template: `<sense-history></sense-history>`,
      testId: 'consoleHistoryButton',
    },
    {
      key: 'settings',
      label:'设置',
      description: 'Settings',
      template: `<sense-settings></sense-settings>`,
      testId: 'consoleSettingsButton',
    },
    {
      key: 'help',
      label:'帮助',
      description: 'Help',
      template: `<sense-help></sense-help>`,
      testId: 'consoleHelpButton',
    },
  ]);

  // if (storage.get('version_welcome_shown') !== '@@SENSE_REVISION') {
  //   controller.open('welcome')
  // }

  return controller
}
