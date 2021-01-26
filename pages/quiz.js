import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage(){
    const router = useRouter();

    return (
        <div>
            <h1>QUIZ - {router.query['name']} jogando...</h1>
        </div>
    );
}