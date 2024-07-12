import Counter from '@/components/Counter';
import Section from '@/components/Section/Section';

export default function Page() {
  return (
    <Section>
      <Counter size="large">
        <Counter size="medium">
          <Counter size="small" />
        </Counter>
      </Counter>
    </Section>
  );
}
