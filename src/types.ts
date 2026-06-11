/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bed' | 'bath' | 'dining' | 'curtains' | 'spa' | 'cushions';
  description: string;
  image: string;
  specification: string; // e.g., "300TC Cotton Satin", "600 GSM Egyptian Cotton"
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  featureList: string[];
}

export interface InquiryForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  productInterest: string;
  message: string;
  destinationCountry: string; // export destination (Australia, etc.)
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  hotel: string;
  location: string;
}

export interface FabricItem {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  attributes: string[];
}
