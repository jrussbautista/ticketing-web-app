import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { useForm, Controller } from 'react-hook-form';

import { TYPES, PRIORITIES, ASSIGNEES } from 'app/constants';
import { upperCaseFirstLetter } from 'utils/text';

import { CreateTicketDTO } from 'types/Ticket';

type CreateTicketFormProps = {
  onSubmit: (values: CreateTicketDTO) => void;
};

const CreateTicketForm = ({ onSubmit }: CreateTicketFormProps) => {
  const defaultValues: CreateTicketDTO = {
    title: '',
    description: '',
    type_id: '',
    priority: '',
    assignee_id: '',
  };
  const { handleSubmit, control } = useForm<CreateTicketDTO>({
    defaultValues,
  });

  const onCreate = (values: CreateTicketDTO) => {
    onSubmit(values);
  };

  const priorities = Object.values(PRIORITIES).map((priority) => priority);

  return (
    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onCreate)}>
      <Controller
        name="title"
        control={control}
        rules={{
          required: 'Title is required field',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            onChange={onChange}
            error={Boolean(error)}
            helperText={error?.message}
            value={value}
            sx={{ mb: 3 }}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required field',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            onChange={onChange}
            error={Boolean(error)}
            helperText={error?.message}
            value={value}
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />
        )}
      />
      <Controller
        name="type_id"
        control={control}
        rules={{
          required: 'Type is required field',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl required fullWidth error={Boolean(error)} sx={{ mb: 3 }}>
            <InputLabel id="type-select">Type</InputLabel>
            <Select
              labelId="type-select"
              id="type-select"
              label="Type"
              value={value}
              onChange={onChange}
            >
              {TYPES.map((type) => (
                <MenuItem value={type.id} key={type.id}>
                  {upperCaseFirstLetter(type.name)}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="priority"
        control={control}
        rules={{
          required: 'Priority is required field',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl required fullWidth error={Boolean(error)} sx={{ mb: 3 }}>
            <InputLabel id="priority-select">Priority</InputLabel>
            <Select
              labelId="priority-select"
              id="priority-select"
              label="Priority"
              value={value}
              onChange={onChange}
            >
              {priorities.map((priority) => (
                <MenuItem value={priority} key={priority}>
                  {upperCaseFirstLetter(priority)}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="assignee_id"
        control={control}
        rules={{
          required: 'Assignee is required field',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl required fullWidth error={Boolean(error)}>
            <InputLabel id="assignee-select">Assignee</InputLabel>
            <Select
              labelId="assignee-select"
              id="assignee-select"
              label="Assignee"
              value={value}
              onChange={onChange}
            >
              {ASSIGNEES.map((assignee) => (
                <MenuItem value={assignee.id} key={assignee.id}>
                  {assignee.name}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" size="large" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default CreateTicketForm;
