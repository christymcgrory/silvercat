import { Box, TextInput, Group, Button, Title, Center, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function Create() {
    const [error, setError] = useState(false)
    const router = useRouter()

    const baseUrl = "http://localhost:3000"
    let createAccountURL = new URL('/api/user/create', baseUrl)

    const form = useForm({
        initialValues: {
            username: '',
            password: '',
        }
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await fetch(createAccountURL, {
            method: "POST",
            body: JSON.stringify(form.values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        if (data.statusCode !== 201) {
            setError(data.message)
        } else {
            router.push("/")
        }
    }

    return (
        <Center style={{ width: "100%", height: 1000 }}>
            <div>
                <Title order={1}>Welcome! Please create an account below</Title>
                {error && <Alert icon={"!"} title="Error" color="red" withCloseButton>
                    {error}
                </Alert>}
                <Box sx={{ maxWidth: 300 }} mx="auto">
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            withAsterisk
                            label="username"
                            placeholder="John Appleseed"
                            {...form.getInputProps('username')}
                        />
                        <TextInput
                            withAsterisk
                            label="password"
                            placeholder="John Appleseed"
                            {...form.getInputProps('password')}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </Box>
            </div>
        </Center>
    )
}