import { memo } from 'react';
import type { PlaceSearchResult } from './PlaceSearchModal';

type MapSearchItemProps = {
  place: PlaceSearchResult;
  handlePlaceSelect: (item: PlaceSearchResult) => void;
};

const MapSearchItemComponent = ({
  place,
  handlePlaceSelect,
}: MapSearchItemProps) => {
  return (
    <div
      key={place.id}
      className="cursor-pointer rounded-lg border p-4 transition-colors hover:bg-gray-50"
      onClick={() => handlePlaceSelect(place)}
    >
      <h3 className="mb-1 text-lg font-semibold">{place.place_name}</h3>
      <p className="mb-1 text-sm text-gray-600">
        {place.road_address_name || place.address_name}
      </p>
      {place.road_address_name &&
        place.road_address_name !== place.address_name && (
          <p className="text-xs text-gray-500">지번: {place.address_name}</p>
        )}
    </div>
  );
};

export const MapSearchItem = memo(MapSearchItemComponent);
