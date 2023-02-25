import { createServer, Model } from "miragejs";

export const setupServer=()=>{
    // // dữ liệu tĩnh
    // let sever=createServer()
    // sever.get("/api/todos", { 
    //     todos: [
    //     { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    //     { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    //     { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    //     ]
    //  })
    //  /**
    //   * Trường hợp thêm dữ liệu mới:
    //   * sever.post("api/todos",()=>{    })
    //   * Dữ liệu mới ni chỉ viết đè lên dữ liệu cũ không thêm vào dữ liệu trên (vì dữ liệu trên là dữ liệu tĩnh , cần tạo ra dữ liệu động)
    //   */
    // // get ni như ta khai báo các đường dẫn đến các api -> todo lấy ra các danh sách todolist hiện tại 
    // // tham số thứ 2 là respon nó trả về 

    // tạo dữ liệu động để thêm dữ liệu mới vào 
    let sever=createServer({
        models:{
            todos:Model
        },
        // cấu hình routes
        routes(){
            this.get("/api/todos", (schema)=>{ 
                    return schema.todos.all()
                    // lấy hết các dữ liệu trong db giả todos
                 });
                //  request ni chứa dữ liệu mà ta gửi lên server để lưu vào db
            this.post("api/todos",( schema,request)=>{
                // chuyển string sang object
                const payload=JSON.parse(request.requestBody)
                return schema.todos.create(payload)
                // tạo mới 1 bộ nhớ đệm để lưu trữ dữ liệu payload
            })
            // viết api để cập nhật 
            this.post("api/updatetodo",(schema,request)=>{
                const payload=JSON.parse(request.requestBody)
                const currentTodo=schema.todos.find(payload.id)
                currentTodo.update(payload)
            })
        }
    })
    //fake api để làm các tính năng trước trong time đợi BE
}