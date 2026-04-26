<<<<<<< HEAD
import type { Core } from '@strapi/strapi';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    if (process.env.NODE_ENV === 'development') {
      console.log('--- ChurchMove: System Sync Starting ---');

      const navData = [
        {
          GroupTitle: 'Getting Started',
          Links: [
            { Label: 'Overview', Path: '/docs/overview', IconName: 'BookOpen' },
            { Label: 'Quickstart', Path: '/docs/quickstart', IconName: 'Zap' },
            { Label: 'Branch Setup', Path: '/docs/branch-setup', IconName: 'Settings' },
            { Label: 'Tech Stack', Path: '/docs/tech-stack', IconName: 'Layers' },
            { Label: 'Staff Onboarding', Path: '/docs/user-onboarding', IconName: 'UserPlus' },
          ],
        },
        {
          GroupTitle: 'Admin & Operations',
          Links: [
            { Label: 'Member Directory', Path: '/admin/member-management/members', IconName: 'Users' },
            { Label: 'Onboarding', Path: '/admin/member-management/onboarding', IconName: 'UserPlus' },
            { Label: 'Membership Enrollment', Path: '/admin/member-management/enrollment', IconName: 'Users' },
            { Label: 'Cell Units', Path: '/admin/cell-units', IconName: 'Network' },
            { Label: 'Roles & Permissions', Path: '/admin/roles', IconName: 'ShieldCheck' },
            { Label: 'Audit Logs', Path: '/admin/audit-log', IconName: 'History' },
          ],
        },
        {
          GroupTitle: 'Finance & Partnership',
          Links: [
            { Label: 'Tithe Tracking', Path: '/finance/tithe-tracking', IconName: 'Coins' },
            { Label: 'Giving', Path: '/finance/giving', IconName: 'HeartHandshake' },
            { Label: 'Partnership Reports', Path: '/finance/reports', IconName: 'FilePieChart' },
            { Label: 'Transaction History', Path: '/admin/partnership/transactions', IconName: 'ArrowRightLeft' },
          ],
        },
        {
          GroupTitle: 'Media & Mobile',
          Links: [
            { Label: 'Sermon Library', Path: '/media/sermons', IconName: 'Mic2' },
            { Label: 'Resources', Path: '/media/resources', IconName: 'Library' },
            { Label: 'Broadcast', Path: '/mobile/broadcast', IconName: 'Radio' },
            { Label: 'Attendance', Path: '/mobile/attendance', IconName: 'CheckCircle2' },
          ],
        },
        {
          GroupTitle: 'Technical & Support',
          Links: [
            { Label: 'API Reference', Path: '/technical/api-reference', IconName: 'Code2' },
            { Label: 'Security', Path: '/technical/security', IconName: 'Lock' },
            { Label: 'Help Center', Path: '/Supports/help', IconName: 'LifeBuoy' },
            { Label: 'Contact Support', Path: '/contact', IconName: 'Mail' },
          ],
        },
      ];

      try {
        const navUid = 'api::navigation.navigation' as any;
        const pageUid = 'api::guide-page.guide-page' as any;

        // 1. Automate Page Seeding
        for (const group of navData) {
          for (const link of group.Links) {
            const slug = link.Path.split('/').pop() || 'index';
            const exists = await strapi.documents(pageUid).findFirst({ filters: { Slug: slug } });

            if (!exists) {
              await strapi.documents(pageUid).create({
                data: {
                  Title: link.Label,
                  Slug: slug,
                  Content: [{ type: 'paragraph', children: [{ type: 'text', text: `Documentation for ${link.Label}` }] }]
                },
                status: 'published'
              });
            }
          }
        }

        // 2. Navigation Sync
        const existing = await strapi.documents(navUid).findFirst();
        const payload: any = { data: { Groups: navData }, status: 'published' };

        if (existing) {
          await strapi.documents(navUid).update({ documentId: existing.documentId, ...payload });
        } else {
          await strapi.documents(navUid).create(payload);
        }
        console.log('✅ ChurchMove: Navigation and Pages synchronized.');
      } catch (err) {
        console.error('❌ Sync Error:', err);
      }
    }
  },
=======
// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
>>>>>>> ac1b6f53d0afadfd17d0800b468bb9d0330c4482
};
