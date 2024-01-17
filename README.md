## Usage
    npm install @r3dm4st3r/react-hook-form

### Quickstart Guide

```jsx
import { Button } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';

import { Input, PasswordInput } from '@r3dm4st3r/react-hook-form';

function App() {

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const handleFormSubmit = (values) => {
        console.log({values});
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <Input name="username" label="Username" props={{size: 'lg'}} />
                <PasswordInput name="password" label="PasswordInput" props={{size: 'lg'}} />
                <Button type="submit" size="lg">Submit</Button>
            </form>
        </FormProvider>
    );
}
```

### Components [ [View All](src%2Felements) ]

- Input
- Password
- Switch
- Select
- Radio
- Textarea
- Checkbox
- Chip
- ChipGroup
- ColorPicker
- ColorInput

And many more is about to add...

> This Package has been made to quick start with react-hook-forms using Mantine UI. If you find this useful, star the repo, If you find any issue or have some feedback or suggestion, reach me out.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
