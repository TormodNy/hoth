import { Box } from "./Box";

interface TransportBoxProps {
  index: number;
}

export function TransportBox({ index }: TransportBoxProps) {
  return (
    <Box index={index} removable>
      <iframe
        src="https://mon.ruter.no/departures/59.929213-10.71634/N4Igrgzgpgwg9gGzAWwHYBkCGBPOYAuIAXAGaYLQA0IARnJgE4AmExA2qBPnAA4AKCTAGMoASRbsQAOQDKAJSIzu-QSKIBWABwBmTQEYQAXWpMog7FCZLG+ACoBLZFGIAGagAt7TUxnuoorETAAL7UqCg0UAwA8iQAIlA8NmAMAcSa1Pj2+AjORCAAspgAVnAMXGBQqCAm9hCYNLlMtgyYqBA8ZfgFcKaBbMYgVQ1NxPgMlR5eUC3CANbwSGhjE1ChnMoCwmISRGzS8oqbqlAaOuoALEYmZjiW1gx2jnluIJ7eVeh+aUGhIOHISIxeKJZKpQIZEBZHJ5EAAMQYcAA5v4GAACLiYJj2ODVWr1RqWWbtTqPHp9diDYaEpjEMgUKBTUyzIQLRAoaqkcjQYKDABuUQgOM5ACZgkA"
        className="w-full h-full rounded-sm scale"
      />
    </Box>
  );
}
