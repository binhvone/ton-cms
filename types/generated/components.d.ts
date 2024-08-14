import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTest extends Schema.Component {
  collectionName: 'components_shared_tests';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary']>;
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedTeam extends Schema.Component {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    members: Attribute.Relation<
      'shared.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'SocialNetwork';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    keywords: Attribute.Text;
    metaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaViewport: Attribute.String;
    metaRobots: Attribute.String;
  };
}

export interface SharedOfficialLinks extends Schema.Component {
  collectionName: 'components_shared_official_links';
  info: {
    displayName: 'officialLinks';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'shared.link'>;
    type: Attribute.Enumeration<['youtobe', 'twitter']>;
  };
}

export interface SharedNotice extends Schema.Component {
  collectionName: 'components_shared_notices';
  info: {
    displayName: 'notice';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
  };
}

export interface SharedFurtherInformation extends Schema.Component {
  collectionName: 'components_shared_further_informations';
  info: {
    displayName: 'furtherInformation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    href: Attribute.String;
    firstContent: Attribute.Blocks;
    secondContent: Attribute.Blocks;
    notice: Attribute.Component<'shared.notice'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedFooterColumn extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {
    label: Attribute.String;
    button: Attribute.Component<'shared.test'>;
    link: Attribute.Component<'shared.link'>;
    social: Attribute.Component<'shared.social-network'>;
  };
}

export interface SharedContact extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    contactInformation: Attribute.Component<'shared.contact-information', true>;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

export interface SharedContactInformation extends Schema.Component {
  collectionName: 'components_shared_contact_informations';
  info: {
    displayName: 'contactInformation';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    socials: Attribute.Component<'shared.social-network', true>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    buttons: Attribute.Component<'shared.test', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.test': SharedTest;
      'shared.team': SharedTeam;
      'shared.social-network': SharedSocialNetwork;
      'shared.seo': SharedSeo;
      'shared.official-links': SharedOfficialLinks;
      'shared.notice': SharedNotice;
      'shared.link': SharedLink;
      'shared.header': SharedHeader;
      'shared.further-information': SharedFurtherInformation;
      'shared.footer-column': SharedFooterColumn;
      'shared.contact': SharedContact;
      'shared.contact-information': SharedContactInformation;
      'home-page.banner': HomePageBanner;
      'global.navigation': GlobalNavigation;
      'global.footer': GlobalFooter;
      'blocks.cta': BlocksCta;
    }
  }
}
