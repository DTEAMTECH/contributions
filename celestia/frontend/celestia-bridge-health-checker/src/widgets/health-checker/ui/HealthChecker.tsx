'use client'

import React, { useState } from 'react';
import axios from 'axios';
import styles from "./HealthChecker.module.scss";
import HealthCheckerSideHeader from "@/src/entities/health-checker-side-header/ui/HealthCheckerSideHeader";
import Input from "@/src/shared/ui/input/Input";
import Button from "@/src/shared/ui/button/Button";
import ResponseBlock from "@/src/entities/response-block/ui/ResponseBlock";

const HealthChecker = () => {
    const [ip, setIp] = useState('');
    const [port, setPort] = useState('');
    const [token, setToken] = useState('');
    const [response, setResponse] = useState('');
    const [errors, setErrors] = useState({ ip: '', port: '', token: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const validateIp = (value) => {
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(value) ? '' : 'Invalid IP address';
    };

    const validatePort = (value) => {
        const portRegex = /^[0-9]+$/;
        const portNumber = parseInt(value, 10);
        return portRegex.test(value) && !isNaN(portNumber) && portNumber > 0 && portNumber <= 65535 ? '' : 'Invalid port number';
    };

    const handleInputChange = (setter, validator) => (e) => {
        const value = e.target.value;
        setter(value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [e.target.name]: validator(value)
        }));
    };

    const handleSubmit = async () => {
        const ipError = validateIp(ip) || (!ip ? 'IP is required' : '');
        const portError = validatePort(port) || (!port ? 'Port is required' : '');
        const tokenError = token ? '' : 'Token is required';

        setErrors({ ip: ipError, port: portError, token: tokenError });

        if (!ipError && !portError && !tokenError) {
            try {
                setLoading(true);
                const response = await axios.post('http://localhost:3001/proxy', {
                    ip,
                    port: parseInt(port, 10),
                    token
                });

                setResponse(response.data.message);
                setStatus('success');
            } catch (error) {
                let errorMessage = 'Unknown error';
                if (error.response) {
                    errorMessage = error.response.data.error || 'Error response from server';
                } else if (error.request) {
                    errorMessage = 'No response from server';
                } else {
                    errorMessage = error.message;
                }
                setResponse(errorMessage);
                setStatus('error');
            } finally {
                setLoading(false);
            }
        }

        console.log(ip, port)
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.checker}>
                <div className={styles.input__side}>
                    <HealthCheckerSideHeader headerText={"input"}/>

                    <Input
                        inputName={"Ip:"}
                        name="ip"
                        value={ip}
                        onChange={handleInputChange(setIp, validateIp)}
                        error={errors.ip}
                        placeholder={"Example: 0.0.0.0"}
                    />
                    <Input
                        inputName={"Port:"}
                        name="port"
                        value={port}
                        onChange={handleInputChange(setPort, validatePort)}
                        error={errors.port}
                        placeholder={"Example, Default: 26658"}
                    />
                    <Input
                        inputName={"Authentication token:"}
                        name="token"
                        value={token}
                        onChange={handleInputChange(setToken, () => '')}
                        error={errors.token}
                        placeholder={"Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.gmAn6gC7chPwQ1nogCwS_jTelC5wMwOmL7gIOKwr4Gw"}
                    />

                    <Button onClick={handleSubmit} disabled={errors && false}
                            loading={loading}/>
                </div>

                <div className={styles.output__side}>
                    <HealthCheckerSideHeader headerText={"output"}/>
                    <ResponseBlock status={status} message={response}/>
                </div>
            </div>

            <a href="">How to use it?</a>
        </section>
    );
};

export default HealthChecker;
