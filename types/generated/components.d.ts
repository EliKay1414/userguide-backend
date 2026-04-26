import type { Schema, Struct } from '@strapi/strapi';

<<<<<<< HEAD
export interface NavNavGroup extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_groups';
  info: {
    displayName: 'nav-group';
  };
  attributes: {
    GroupTitle: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'nav.nav-link', true>;
  };
}

export interface NavNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_links';
  info: {
    displayName: 'nav-link';
=======
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
>>>>>>> ac1b6f53d0afadfd17d0800b468bb9d0330c4482
  };
  attributes: {
    IconName: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

<<<<<<< HEAD
declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nav.nav-group': NavNavGroup;
      'nav.nav-link': NavNavLink;
=======
export interface SpecsRegistryColumn extends Struct.ComponentSchema {
  collectionName: 'components_specs_registry_columns';
  info: {
    displayName: 'Registry Column';
  };
  attributes: {
    icon_name: Schema.Attribute.String;
    specs: Schema.Attribute.Component<'specs.spec-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SpecsSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_specs_spec_items';
  info: {
    displayName: 'Spec Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.path-card': ElementsPathCard;
      'navigation.menu-group': NavigationMenuGroup;
      'navigation.menu-link': NavigationMenuLink;
      'specs.registry-column': SpecsRegistryColumn;
      'specs.spec-item': SpecsSpecItem;
>>>>>>> ac1b6f53d0afadfd17d0800b468bb9d0330c4482
    }
  }
}
