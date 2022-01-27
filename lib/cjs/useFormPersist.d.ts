import { FieldPathValue, FieldValues, SetValueConfig, UnpackNestedValue, UseFormWatch } from 'react-hook-form';
interface UsePersistFormProps<T = unknown> {
    formName: string;
    watch: UseFormWatch<FieldValues>;
    setValue: (name: any, value: UnpackNestedValue<FieldPathValue<FieldValues, any>>, options?: SetValueConfig) => void;
    shouldValidate?: boolean;
    shouldDirty?: boolean;
    onRestored?: (values: T) => void;
}
export declare const usePersistForm: <T = unknown>(settings: UsePersistFormProps<T>) => void;
export {};
