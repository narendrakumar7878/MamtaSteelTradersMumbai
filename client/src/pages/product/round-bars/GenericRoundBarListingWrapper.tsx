import { useLocation } from "wouter";
import GenericRoundBarListing from "./GenericRoundBarListing";

export default function GenericRoundBarListingWrapper() {
  const [location] = useLocation();
  
  // Extract query parameters from URL
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  
  const title = searchParams.get('title') || 'Product';
  const count = parseInt(searchParams.get('count') || '1');
  const description = searchParams.get('description') || 'High-quality steel product for industrial applications';
  const image = searchParams.get('image') || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center';

  return (
    <GenericRoundBarListing
      title={title}
      count={count}
      description={description}
      image={image}
    />
  );
}