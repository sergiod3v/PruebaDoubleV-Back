const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("./protofile.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const ticketApi = grpc.loadPackageDefinition(packageDefinition).ticketapi;

const server = new grpc.Server();

server.addService(ticketApi.TicketService.service, {
  CreateTicket: (call, callback) => {
    const request = call.request;
    // Implement your logic to create a ticket here
    const response = {
      id: "generatedId123",
      user: request.user,
      status: request.status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    callback(null, response);
  },
  GetTickets: (call, callback) => {
    const request = call.request;
    // Implement your logic to retrieve tickets with pagination here
    const response = {
      ticket_info: [
        {
          id: "ticketId1",
          user: "user1",
          status: "open",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        // Add more ticket_info as needed
      ],
    };
    callback(null, response);
  },
  GetTicketById: (call, callback) => {
    const request = call.request;
    // Implement your logic to retrieve a specific ticket by ID here
    const response = {
      id: request.id,
      user: "user1",
      status: "open",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    callback(null, response);
  },
  UpdateTicket: (call, callback) => {
    const request = call.request;
    // Implement your logic to update a ticket here
    const response = {
      id: request.id,
      user: request.user,
      status: request.status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    callback(null, response);
  },
  DeleteTicket: (call, callback) => {
    const request = call.request;
    // Implement your logic to delete a ticket here
    const response = {
      message: `Ticket with ID ${request.id} deleted successfully`,
    };
    callback(null, response);
  },
});

const PORT = 50051;
const HOST = "0.0.0.0";

server.bind(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure());
console.log(`gRPC server running at ${HOST}:${PORT}`);
server.start();
