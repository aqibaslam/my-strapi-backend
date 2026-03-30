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

export interface SectionsClutchReviewBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_clutch_review_blocks';
  info: {
    displayName: 'clutch_review_block';
  };
  attributes: {
    clutch_company_name: Schema.Attribute.String;
    clutch_description: Schema.Attribute.String;
    clutch_perosn_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    clutch_person_name: Schema.Attribute.String;
    clutch_svg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    review_svg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    left_faq_answere: Schema.Attribute.Text;
    left_faq_question: Schema.Attribute.String;
    right_faq_answere: Schema.Attribute.Text;
    right_faq_question: Schema.Attribute.String;
  };
}

export interface SectionsGreyCardListing extends Struct.ComponentSchema {
  collectionName: 'components_sections_grey_card_listings';
  info: {
    displayName: 'grey_card_listing';
  };
  attributes: {
    grey_list_heading: Schema.Attribute.String;
  };
}

export interface SectionsPinkCardListing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pink_card_listings';
  info: {
    displayName: 'pink_card_listing';
  };
  attributes: {
    pink_list_heading: Schema.Attribute.String;
  };
}

export interface SectionsPriceListItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_price_list_items';
  info: {
    displayName: 'price-list-item';
  };
  attributes: {
    list_heading: Schema.Attribute.String;
  };
}

export interface SectionsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_cards';
  info: {
    displayName: 'pricing-card';
  };
  attributes: {
    card_description: Schema.Attribute.String;
    card_title: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    listing: Schema.Attribute.Component<'sections.price-list-item', true>;
    price_heading: Schema.Attribute.String;
    price_subheading: Schema.Attribute.String;
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
      'sections.clutch-review-block': SectionsClutchReviewBlock;
      'sections.faq-item': SectionsFaqItem;
      'sections.grey-card-listing': SectionsGreyCardListing;
      'sections.pink-card-listing': SectionsPinkCardListing;
      'sections.price-list-item': SectionsPriceListItem;
      'sections.pricing-card': SectionsPricingCard;
      'sections.slide': SectionsSlide;
      'sections.wave-listing-block': SectionsWaveListingBlock;
    }
  }
}
