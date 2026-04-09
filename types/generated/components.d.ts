import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsPathCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_path_cards';
  info: {
    displayName: 'path-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavigationMenuGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_groups';
  info: {
    displayName: 'Menu Group';
  };
  attributes: {
    GroupTitle: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'navigation.menu-link', true>;
  };
}

export interface NavigationMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'Menu Link';
  };
  attributes: {
    IconName: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.path-card': ElementsPathCard;
      'navigation.menu-group': NavigationMenuGroup;
      'navigation.menu-link': NavigationMenuLink;
    }
  }
}
