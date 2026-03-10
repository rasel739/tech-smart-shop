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
  defaultValue?: string;
  select_trigger_className?: string;
};

const SelectField = ({
  selectItem,
  handleSelectChange,
  selectLabel,
  defaultValue,
  select_trigger_className,
}: SelectFieldProps) => {
  return (
    <Select onValueChange={handleSelectChange} defaultValue={defaultValue || selectItem[0]?.value}>
      <SelectTrigger className={`w-full max-w-40 ${select_trigger_className}`}>
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
