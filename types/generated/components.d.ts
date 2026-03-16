import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroListing extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_listings';
  info: {
    displayName: 'hero_listing';
  };
  attributes: {
    list_heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-listing': HeroHeroListing;
    }
  }
}
