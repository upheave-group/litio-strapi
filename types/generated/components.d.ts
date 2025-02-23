import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsMissionVisionAboutUsMissionVision
  extends Struct.ComponentSchema {
  collectionName: 'components_about_us_mission_vision_about_us_mission_visions';
  info: {
    displayName: 'AboutUsMissionVision';
    icon: 'bulletList';
  };
  attributes: {
    missionImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    missionStatment: Schema.Attribute.Text & Schema.Attribute.Required;
    visionSatment: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsSectionAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_section_about_us_sections';
  info: {
    displayName: 'About us section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsTitleAboutUsTitle extends Struct.ComponentSchema {
  collectionName: 'components_about_us_title_about_us_titles';
  info: {
    description: '';
    displayName: 'aboutUsTitle';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutusHeaderAboutusHeader extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_header_aboutus_headers';
  info: {
    description: '';
    displayName: 'aboutusHeader';
    icon: 'bulletList';
  };
  attributes: {
    AboutUsHeaderImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    numberOfProjects: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'address';
    icon: 'bulletList';
  };
  attributes: {
    cityCountry: Schema.Attribute.Text & Schema.Attribute.Required;
    street: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ArticlesSectionArticlesSection extends Struct.ComponentSchema {
  collectionName: 'components_articles_section_articles_sections';
  info: {
    description: '';
    displayName: 'articlesSection';
    icon: 'bulletList';
  };
  attributes: {
    articls: Schema.Attribute.Relation<'oneToMany', 'api::articl.articl'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExperienceSectionExperienceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_experience_section_experience_sections';
  info: {
    description: '';
    displayName: 'experienceSection';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    experienceImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    numberOfYears: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LitioIntroLitioIntro extends Struct.ComponentSchema {
  collectionName: 'components_litio_intro_litio_intros';
  info: {
    description: '';
    displayName: 'litioIntro';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface MileStonesMilestones extends Struct.ComponentSchema {
  collectionName: 'components_mile_stones_milestones';
  info: {
    displayName: 'milestones';
    icon: 'bulletList';
  };
  attributes: {
    milestone: Schema.Attribute.Component<'milestone.milestone', false>;
    ProjectThree: Schema.Attribute.Component<'milestone.milestone', false>;
    projectTwo: Schema.Attribute.Component<'milestone.milestone', false>;
  };
}

export interface MilestoneMilestone extends Struct.ComponentSchema {
  collectionName: 'components_milestone_milestones';
  info: {
    displayName: 'milestone';
    icon: 'bulletList';
  };
  attributes: {
    projectOne: Schema.Attribute.Text & Schema.Attribute.Required;
    Year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProductProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    productName: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProductsSectionProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_products_section_products_sections';
  info: {
    description: '';
    displayName: 'productsSection';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    productsCard: Schema.Attribute.Component<
      'service.product-service-card',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface RioCalculatorRioCalculator extends Struct.ComponentSchema {
  collectionName: 'components_rio_calculator_rio_calculators';
  info: {
    description: '';
    displayName: 'RIOCalculator';
    icon: 'connector';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    lable: Schema.Attribute.Text & Schema.Attribute.Required;
    result: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    varaible: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface SectionTileSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_section_tile_section_titles';
  info: {
    description: '';
    displayName: 'sectionTitle';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    serviceProductCard: Schema.Attribute.Component<
      'service.product-service-card',
      true
    >;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ServiceProductServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_service_product_service_cards';
  info: {
    displayName: 'product-service card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SologanSologan extends Struct.ComponentSchema {
  collectionName: 'components_sologan_sologans';
  info: {
    displayName: 'sologan';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us-mission-vision.about-us-mission-vision': AboutUsMissionVisionAboutUsMissionVision;
      'about-us-section.about-us-section': AboutUsSectionAboutUsSection;
      'about-us-title.about-us-title': AboutUsTitleAboutUsTitle;
      'aboutus-header.aboutus-header': AboutusHeaderAboutusHeader;
      'address.address': AddressAddress;
      'articles-section.articles-section': ArticlesSectionArticlesSection;
      'button.button': ButtonButton;
      'experience-section.experience-section': ExperienceSectionExperienceSection;
      'litio-intro.litio-intro': LitioIntroLitioIntro;
      'mile-stones.milestones': MileStonesMilestones;
      'milestone.milestone': MilestoneMilestone;
      'product.product': ProductProduct;
      'products-section.products-section': ProductsSectionProductsSection;
      'rio-calculator.rio-calculator': RioCalculatorRioCalculator;
      'section-tile.section-title': SectionTileSectionTitle;
      'seo.seo': SeoSeo;
      'service.product-service-card': ServiceProductServiceCard;
      'sologan.sologan': SologanSologan;
    }
  }
}
