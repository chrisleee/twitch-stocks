import Link from 'next/link';
import * as React from 'react';

export default () =>
    <div>
        <p>This is from TestComponent!</p>
        <Link href="https://github.com/ChrisALee/twitch-stocks">
            <a>GitHub Link</a>
        </Link>
    </div>;
