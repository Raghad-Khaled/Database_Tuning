// select p.name,SUM(op.quentity) as order_times
// from products p
// join order_products op 
//   on op.product_id=p.id
// join orders o
//   on op.order_id=o.id 
// join addresses a 
//   on o.address_id=a.id 
// where a.city='iste'
// GROUP BY p.id;

///////////////////////Query 1////////////////////////////////
db.products.aggregate([
    //Join with user_info table
    {
        $lookup: {
            from: "order_products", // other table name
            localField: "id", // name of users table field
            foreignField: "product_id", // name of userinfo tablefield
            as: "product_order", // alias for userinfo table
        },
    },
    { $unwind: "$product_order" }, // $unwind used for getting data in object or for one record only
    {
        $lookup: {
            from: "orders",
            localField: "product_order.order_id",
            foreignField: "id",
            as: "order",
        },
    },
    {
        $unwind: "$order",
    },
    {
        $lookup: {
            from: "addresses",
            localField: "order.address_id",
            foreignField: "id",
            as: "address",
        },
    },
    {
        $unwind: "$address",
    },
    {
        $match: {
            "address.city": "city1872",
        },
    },
    {
        $group: {
            _id: "id",
            order_times: { $sum: "$product_order.quentity" },
        },
    },
    {
        $project: {
            name: 1,
            order_times: 1,
        },
    },
]);

///////////////////////Query 2////////////////////////////////

db.products.aggregate([
    //Join with user_info table
    {
        $lookup: {
            from: "order_products", // other table name
            localField: "id", // name of users table field
            foreignField: "product_id", // name of userinfo tablefield
            as: "product_order", // alias for userinfo table
        },
    },
    { $unwind: "$product_order" }, // $unwind used for getting data in object or for one record only
    {
        $lookup: {
            from: "orders",
            localField: "product_order.order_id",
            foreignField: "id",
            as: "order",
        },
    },
    {
        $unwind: "$order",
    },
    {
        $lookup: {
            from: "addresses",
            localField: "order.address_id",
            foreignField: "id",
            as: "address",
        },
    },
    {
        $unwind: "$address",
    },
    {
        $lookup: {
            from: "users",
            localField: "address.user_id",
            foreignField: "id",
            as: "user",
        },
    },
    {
        $unwind: "$user", // $unwind used for getting data in object or for one record only
    },
    {
        $match: {
            name: "plapla8", // product name
        },
    },
    {
        $project: {
            "user.first_name": 1, // 1 for showing and 0 for not showing
            "user.last_name": 1,
            "order.delovered_at": 1,
        },
    },
    {
        $sort: {
            "order.delovered_at": -1, // 1 for ascending order and -1 for descending order
        },
    },
]);

///////////////////////Query 3////////////////////////////////

db.reviews.aggregate([
    //Join with user_info table
    {
        $lookup: {
            from: "products", // other table name
            localField: "product_id", // name of users table field
            foreignField: "id", // name of userinfo tablefield
            as: "product", // alias for userinfo table
        },
    },
    { $unwind: "$product" }, // $unwind used for getting data in object or for one record only

    {
        $group: {
            _id: "$product.id",
            avg_rate: { $sum: "rate" },
        },
    },
    {
        $project: {
            "product.name": 1, // 1 for showing and 0 for not showing
            avg_rate: 1,
        },
    },
    {
        $sort: {
            avg_rate: -1, // 1 for ascending order and -1 for descending order
        },
    },
]);



/////////////////////////Query4////////////////////////////////

db.orders.aggregate([
    //Join with user_info table
    {
        $lookup: {
            from: "addresses", // other table name
            localField: "address_id", // name of users table field
            foreignField: "id", // name of userinfo tablefield
            as: "address", // alias for userinfo table
        },
    },
    { $unwind: "$address" }, // $unwind used for getting data in object or for one record only
    {
        $group: {
            _id: "$address.city",
            number_of_orders: { $count: "id" },
        },
    },
    {
        $project: {
            number_of_orders: 1, // 1 for showing and 0 for not showing
            "city": 1,
        },
    },
    {
        $sort: {
            number_of_orders: -1, // 1 for ascending order and -1 for descending order
        },
    },
]);

// select a.city,Count(o.id) as number_of_orders 
// from orders o
//  join addresses a 
// on o.address_id=a.id 
// GROUP BY a.city 
// ORDER BY number_of_orders DESC;


// select p.name, AVG(r.rate)as avg_rate
// from products p
// join reviews r
// on p.id=r.product_id
// GROUP BY(p.id)
// ORDER BY avg_rate DESC;

// select u.first_name,u.last_name, o.delivered_at
// from products p
// join order_products op
//   on op.product_id=p.id
// join orders o
//   on op.order_id=o.id
// join addresses a
//   on o.address_id=a.id
// JOIN users u
//  ON a.user_id=u.id
// where p.name='plapla8'
// ORDER BY delivered_at DESC

// select p.name,SUM(op.quentity) as order_times
// from products p
// join order_products op
//   on op.product_id=p.id
// join orders o
//   on op.order_id=o.id
// join addresses a
//   on o.address_id=a.id
// where a.city='iste'
// GROUP BY p.id;
