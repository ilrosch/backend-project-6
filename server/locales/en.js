// @ts-check

export default {
  translation: {
    appName: 'Task manager',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User registered successfully',
        },
        edit: {
          error: 'Failed to update data',
          success: 'User data successfully updated',
        },
        delete: {
          error: 'Failed to delete',
          success: 'User deleted successfully',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
      },
      actions: {
        save: 'Save',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        id: 'ID',
        email: 'Email',
        createdAt: 'Created at',
        firstName: 'First name',
        lastName: 'Last name',
        password: 'Password',
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        fullName: 'Full name',
        actions: 'Actions',
        edit: 'Edit',
        delete: 'Delete',
      },
      welcome: {
        index: {
          hello: 'Welcome to the task manager!',
          description: 'Create tasks, assign executors and change their statuses. Registration and authentication are required to work with the system.',
          more: 'Get start',
        },
      },
    },
  },
};
