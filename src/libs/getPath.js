export const getPathNameTitle = (path) => {
  switch (path) {
    case '/dashboard':
      return 'Dashboard';
    case '/profile':
      return 'Profile';
    case '/properties':
      return '';
    case '/agent':
      return 'Agent';
    case '/review':
      return 'Review';
    case '/message':
      return 'Message';
    default:
      return 'Dashboard';
  }
};
