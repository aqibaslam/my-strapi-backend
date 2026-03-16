import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroListing extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_listings';
  info: {
    displayName: 'hero_listing';
  };
  attributes: {
    list_title: Schema.Attribute.String;
  };
}

export interface MarqueeMarqueeListing extends Struct.ComponentSchema {
  collectionName: 'components_marquee_marquee_listings';
  info: {
    displayName: 'MarqueeListing';
    icon: 'arrowRight';
  };
  attributes: {
    MarqueeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-listing': HeroHeroListing;
      'marquee.marquee-listing': MarqueeMarqueeListing;
    }
  }
}
