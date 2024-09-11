import { Box } from "./Box";

interface TransportBoxProps {
  index: number;
}

export function TransportBox({ index }: TransportBoxProps) {
  return (
    <Box index={index} removable>
      <iframe
        src="https://mon.ruter.no/departures/59.929213-10.71634/N4Igrgzgpgwg9gGzAWwHYBkCGBPOYAuIAXAGaYLQA0IARnJgE4AmExA2qBPnAA4AKCTAGMoASRbsQAOQDKAJSIzu-QSKIBWABwBmdQBYQ1WQqW8BwqBp2aAjCAC61JlEHYoTJY3wAVAJbIoYnVqAAtfJmcMX1QoViJgAF9qVBQaKAYAeRIAESgeLzAGWOJNanxffARAohAAWUwAKzgGLjAoVEMQJl8ITBoqpm8GTFQIHmb8WrhnOLYQfGHkTppIB2p2voHiBbbQ8Kgh4QBreCQ0bYY2pM5lcxFxWel5RVvVSy1dA0culxx3TwYPn81QADHsIu10NFivEkiAUsg0pkcnkCkU4qV5hUqsQQAAxBhwADmMQYAAIuJhunAOk4ept3IdRuNAVMZuxvht+u5iGQKFBwQdhkITogUB1SORoAlvgA3dIQXw04gAJgSQA"
        className="w-full h-full rounded-sm scale"
      />
    </Box>
  );
}
