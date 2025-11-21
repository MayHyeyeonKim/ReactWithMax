import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Place {
  id: string;
  title: string;
  image: { src: string; alt: string };
}

interface PlacesProps {
  title: string;
  places: Place[];
  fallbackText?: string;
  onSelectPlace: (id: string) => void;
}

const Places = ({
  title,
  places,
  fallbackText,
  onSelectPlace,
}: PlacesProps) => {
  return (
    <>
      <Box component="h2" sx={{ mb: 2 }}>
        {title}
      </Box>
      {places.length === 0 ? (
        <p> {fallbackText}</p>
      ) : (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <Button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.title} />
                {place.title}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Places;
