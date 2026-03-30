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

export interface ReviewsReview extends Struct.ComponentSchema {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    name: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    video_vimeo_link: Schema.Attribute.String;
  };
}

export interface SectionsBrandslogo extends Struct.ComponentSchema {
  collectionName: 'components_sections_brandslogos';
  info: {
    displayName: 'brandslogo';
  };
  attributes: {
    brand_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionsSlide extends Struct.ComponentSchema {
  collectionName: 'components_sections_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsWaveListingBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_wave_listing_blocks';
  info: {
    displayName: 'wave_listing_block';
  };
  attributes: {
    list_heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-listing': HeroHeroListing;
      'marquee.marquee-listing': MarqueeMarqueeListing;
      'reviews.review': ReviewsReview;
      'sections.brandslogo': SectionsBrandslogo;
      'sections.slide': SectionsSlide;
      'sections.wave-listing-block': SectionsWaveListingBlock;
    }
  }
}
