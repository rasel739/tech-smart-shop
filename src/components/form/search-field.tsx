import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';

type SearchFieldProps = {
  inpuTgrouPclassName?: string;
  inpuTgrouPInputclassName?: string;
};

const SearchField = ({ inpuTgrouPclassName, inpuTgrouPInputclassName }: SearchFieldProps) => {
  return (
    <Field className='max-w-sm outline-0'>
      <InputGroup className={`rounded-l-none rounded-r-full border-0 ${inpuTgrouPclassName}`}>
        <InputGroupInput
          id='inline-start-input'
          placeholder='Search...'
          className={`${inpuTgrouPInputclassName} outline-none`}
          style={{
            outline: 'none',
          }}
        />

        <InputGroupAddon align='inline-end'>
          <SearchIcon className='text-muted-foreground' />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};

export default SearchField;
