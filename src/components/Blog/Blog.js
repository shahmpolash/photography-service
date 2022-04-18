import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Difference between authorization and authentication</h2>
            <p>authentication এবং authorization মধ্যে পার্থক্য কি? সহজভাবে বলতে গেলে, authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে authorization হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। পরিস্থিতি এমন একটি এয়ারলাইনের মতো যা নির্ধারণ করতে হবে কোন লোক বোর্ডে আসতে পারে। প্রথম ধাপ হল একজন যাত্রীর পরিচয় নিশ্চিত করা যাতে তারা কে বলে তারা তা নিশ্চিত 
ডিজিটাল বিশ্বে, authentication এবং authorization এই একই লক্ষ্যগুলি অর্জন করে। authentication ব্যবহার করা হয় যাচাই করার জন্য যে ব্যবহারকারীরা আসলেই তাদের প্রতিনিধিত্ব করে। একবার এটি নিশ্চিত হয়ে গেলে, ব্যবহারকারীকে বিভিন্ন ধরণের ব্যবহারকারীদের জন্য প্রতিষ্ঠিত নিয়মের উপর নির্ভর করে বিভিন্ন স্তরের তথ্য অ্যাক্সেস করার এবং নির্দিষ্ট ফাংশন সম্পাদন করার অনুমতি দেওয়ার জন্য authorization ব্যবহার করা হয়।
</p>
<br />
<br />
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>authentication এর জন্য আমরা firebase ব্যবহার করি . Other options: Auth0, Amazon, MongoDB, Okta  </p>
            <br />
<br />
            <h2>What other services does firebase provide other than authentication</h2>
            <p>Firebase also provides:

                <li>Cloud Firestore</li>
                <li>Cloud Functions.</li>
                <li>Authentication</li>
                <li>Hosting</li>
                <li>Cloud Storage.</li>
                <li>Google Analytics.</li>
                <li>Cloud Messaging.</li>
            </p>
        </div>
    );
};

export default Blog;