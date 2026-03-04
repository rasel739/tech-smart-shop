import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectFieldProps = {
  selectItem: { value: string; label: string }[];
  handleSelectChange: (value: string) => void;
  selectLabel?: string;
};

const SelectField = ({ selectItem, handleSelectChange, selectLabel }: SelectFieldProps) => {
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className='w-full max-w-48'>
        <SelectValue placeholder={`select ${selectLabel || 'value'}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel || 'select value'}</SelectLabel>
          {selectItem.map((select) => (
            <SelectItem key={select.value} value={select.value}>
              {select.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
